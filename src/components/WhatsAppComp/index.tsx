

import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import {useBreakpointValue} from '@chakra-ui/react'
import Avatar from '../../../public/images/lucasJuste.svg'

export default function WhatsAppComp() {
	const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
        xl: true
    })

    return (

	

        <WhatsAppWidget
			flex="-1"
			phoneNo="5511944466669"
			position="right"
			widgetWidth="300px"
			widgetWidthMobile="100px"
			autoOpen={false}
			messageBox={true}
			messageBoxTxt="Quero tirar uma ideia do papel"
			iconSize="50"
			iconColor="white"
			iconBgColor="#04D361"
			headerIcon={Avatar}
			headerIconColor="pink"
			headerTxtColor="black"
			headerBgColor="#04D361"
			headerTitle="Lucas Juste"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Lucas Juste"
			chatMessage={<>Olá! 👋 <br /><br /> Como posso te ajudar?</>}
			footerBgColor="#999"
			btnBgColor="#8257E5"
			btnTxtColor="white"
		/>
    )
}