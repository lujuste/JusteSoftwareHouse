import { Flex, Tabs, TabList, Tab, TabPanel, TabPanels, Box, Heading} from '@chakra-ui/react'
import GroupItemsFrontEnd from './GroupItemsFront'
import GroupItemsBack from './GroupItemsBack'
import GroupItemsMobile from './GroupItemsMobile'
import GroupItemsDatabase from './GroupItemsDatabase'
import GroupItemsCMS from './GroupItemsCMS'

export default function ContentItems() {
    return (
      <>
      <Flex maxW="1400px" bgColor="gray.900" px="10" justify="center" align="center">
          <Tabs>

            <TabList alignItems="center" justifyContent="center">
              <Tab _selected={{
                color: 'white',
                borderColor: 'green.300',
              }}
                _focus={{
                  color: "gray.500"
                }}
                fontSize="20px"
                mr="4"
              >
                FrontEnd

              </Tab>


              <Tab
                _selected={{
                  color: 'white',
                  borderColor: 'green.300',
                }}
                _focus={{
                  color: "gray.500"
                }}
                fontSize="20px"
                mr="4"
              >
                BackEnd
              </Tab>


              <Tab
                _selected={{
                  color: 'white',
                  borderColor: 'green.300',
                }}
                _focus={{
                  color: "gray.500"
                }}
                fontSize="20px"
                mr="4"
              >
                Database
              </Tab>

              <Tab
                _selected={{
                  color: 'white',
                  borderColor: 'green.300',
                }}
                _focus={{
                  color: "gray.500"
                }}
                fontSize="20px"
                mr="4"
              >
                CMS
              </Tab>

              <Tab
                _selected={{
                  color: 'white',
                  borderColor: 'green.300',
                }}
                _focus={{
                  color: "gray.500"
                }}
                fontSize="20px"
              >
                Mobile
              </Tab>

            </TabList>

            <Box w="100%" border="1px" color="gray.800" mb="1rem">
              <TabPanels>
                <TabPanel>
                  <GroupItemsFrontEnd />
                </TabPanel>

                <TabPanel>
                  <GroupItemsBack />
                </TabPanel>

                <TabPanel>
                  <GroupItemsMobile />
                </TabPanel>

                <TabPanel>
                  <GroupItemsDatabase />
                </TabPanel>

                <TabPanel>
                  <GroupItemsCMS />
                </TabPanel>
              </TabPanels>
            </Box>
          </Tabs>
        </Flex></>
    )
}