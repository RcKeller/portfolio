// 4. Use `next-themes` to change the theme
import { useTheme as useNextTheme } from 'next-themes'
// import { Switch, useTheme } from '@nextui-org/react'
import { Navbar, Button, Link, Text, Switch, useTheme } from "@nextui-org/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faGithub } from '@fortawesome/free-solid-svg-icons'

export default function Switchable() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          {/* <AcmeLogo /> */}
          {/* <FontAwesomeIcon icon={fa0} /> */}
          {/* <FontAwesomeIcon icon="fa-github" /> */}
          
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="underline">
          <Navbar.Link isActive href="/switchpick">Projects</Navbar.Link>
          <Navbar.Link href="/testimonials">Testimonials</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Switch
        checked={isDark}
        onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
          </Navbar.Item>
        </Navbar.Content>
    </Navbar>
      The current theme is: {type}
    </div>
  )
}
