import React from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Footer, Navbar } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { MdOutlineAccountCircle, MdOutlineShoppingCart } from 'react-icons/md';
import { SiSass } from 'react-icons/si';

const AppLayout = () => {
  return (
    <div>
      <Navbar fluid rounded className="mx-40 sticky">
        <Navbar.Brand
          href="/"
          className="flex self-center whitespace-nowrap text-xl font-semibold gap-3"
        >
          <SiSass /> <span className="uppercase">Skybooks</span>
        </Navbar.Brand>

        <div className="flex md:order-2 gap-3">
          <Button>
            <MdOutlineAccountCircle className="mr-2 h-5 w-5" />
            <span>Account</span>
          </Button>
          <Button>
            <MdOutlineShoppingCart className="mr-2 h-5 w-5" />
            <span>Cart</span>
          </Button>

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/about-us" className="text-sm font-semibold uppercase">
            About Us
          </Navbar.Link>
          <Navbar.Link href="/products" className="text-sm font-semibold uppercase">
            Products
          </Navbar.Link>
          <Navbar.Link href="/new-arrival" className="text-sm font-semibold uppercase">
            New Arrival
          </Navbar.Link>
          <Navbar.Link href="/blog" className="text-sm font-semibold uppercase">
            Blog
          </Navbar.Link>
          <Navbar.Link href="/sale-art" className="text-sm font-semibold uppercase">
            Sale Art
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <Outlet />

      <Footer>
        <div className="w-full">
          <div className="grid mx-40 grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="About us" className="text-xl" />
              <div className="mt-4 flex space-x-6 sm:mt-0">
                <Footer.LinkGroup col>
                  <span className="uppercase font-semibold">
                    Skybooks Company Limited
                  </span>
                  <span>
                    Company tax code: 0xxxxxxxxx
                    <br />
                    Issued by Department of Planning and investment HN - License date:
                    xx/xx/20xx
                    <br />
                    Address: 1 Somewhere St., Dist X, HN
                  </span>
                </Footer.LinkGroup>
              </div>
            </div>
            <div>
              <Footer.Title title="Policy" className="text-xl" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Terms of Service</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Payment Policy</Footer.Link>
                <Footer.Link href="#">Delivery Policy</Footer.Link>
                <Footer.Link href="#">Exchange/Return Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Head office" className="text-xl" />
              <Footer.LinkGroup col>
                <span>Address: 1 Somewhere St., Dist X, HN</span>
                <span>Hotline: +84 xxxxxxxxxx</span>
                <span>Office: +8428 xxxx xxxx</span>
                <span>info@skybooks.io</span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-xl" />
              <div className="mt-4 flex space-x-6 sm:mt-0">
                <Footer.Icon href="/" icon={BsFacebook} />
                <Footer.Icon href="/" icon={BsInstagram} />
                <Footer.Icon href="/" icon={BsTwitter} />
              </div>
            </div>
          </div>

          <Footer.Divider />

          <div className="mx-40 px-4 py-6 sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright by="SKYBOOKS" href="/" year={2023} />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default AppLayout;
