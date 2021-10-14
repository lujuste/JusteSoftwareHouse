/* eslint-disable import/no-anonymous-default-export */
import Prismic from '@prismicio/client'
import { Document } from '@prismicio/client/types/documents';
import { DefaultClient } from '@prismicio/client/types/client';
import { NextApiRequest, NextApiResponse } from 'next';

function linkResolver(doc: Document): string {
    if (doc.type === 'posts') {
      return `/posts/${doc.uid}`;
    }
    return '/';
  }

export function Client(req?: unknown): DefaultClient {
    const prismic = Prismic.client(process.env.PRISMIC_API_ENDPOINT, {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    });
  
    return prismic;
  }

  export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { token: ref, documentId } = req.query;
    const redirectUrl = await Client(req)
      .getPreviewResolver(ref, documentId)
      .resolve(linkResolver, '/');
  
    if (!redirectUrl) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  
    res.setPreviewData({ ref });
  
    res.write(
      `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
      <script>window.location.href = '${redirectUrl}'</script>
      </head>`
    );
    res.end();
  };