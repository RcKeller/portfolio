
// 1. Import `createTheme`
import { useTheme as useNextTheme } from 'next-themes';
import { Navbar, Button, Link, Text, Switch, useTheme, Container, Row } from "@nextui-org/react";
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const { route, asPath: pathname } = useRouter();
  
  return (
    <>
        <Navbar as="header" shouldHideOnScroll isBordered={isDark} variant="sticky">
            <Navbar.Brand>
            {/* <AcmeLogo /> */}
            {/* <FontAwesomeIcon icon={fa0} /> */}
            {/* <FontAwesomeIcon icon="fa-github" /> */}
            {/* <FontAwesomeIcon icon="fa-brands fa-github" /> */}
            <Text b color="inherit" hideIn="xs">
                Andy Keller
                {/* <Navbar.Link href="/">
                    Andy Keller
                    </Navbar.Link> */}
            </Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="underline">
            <Navbar.Link isActive={route === '/[slug]'} href="/switchpick">Projects</Navbar.Link>
            <Navbar.Link isActive={pathname === '/testimonials'} href="/testimonials">Testimonials</Navbar.Link>
            <Navbar.Link href="/resume.pdf" target="_blank">Resume</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
                Login
            </Navbar.Link>
            <Navbar.Item>
                <Switch
                    checked={isDark}
                    onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        //             iconOn={<VideoOffIcon filled />}
        //   iconOff={<VideoIcon filled />}
                />
            </Navbar.Item>
            </Navbar.Content>
        </Navbar>
        <Container as="main">
            {children}
        </Container>
        <Container as="footer">
            <Row justify="center" align="center">
            © 2018. Andy Keller
            </Row>
        </Container>
    </>
  )
}
