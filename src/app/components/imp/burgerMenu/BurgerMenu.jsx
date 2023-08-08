import { Button, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { BsMenuButtonWide } from 'react-icons/bs'
import SideBarItem from '../../hero/components/SideBarItem'
import { sideBarData } from '../../hero/components/sideBarData'

const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button colorScheme='#C5C6D0' onClick={onOpen}>
                <BsMenuButtonWide color={useColorModeValue("black", "white")} />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader color={"purple.500"}>Admin Panel</DrawerHeader>
                    <hr />
                    <DrawerBody>
                        {sideBarData.map((data, i) => (
                            <SideBarItem key={i} title={data.title} options={data.options} icon={data.icon} />
                        ))}
                        {/* <Input placeholder='Type here...' /> */}
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default BurgerMenu