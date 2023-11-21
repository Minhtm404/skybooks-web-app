import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Button, Footer, Label, Navbar, TextInput } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import {
  MdEmail,
  MdInfo,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart
} from 'react-icons/md';
import { SiSass } from 'react-icons/si';
import { Cart } from './index';

const AppLayout = () => {
  const [openCart, setOpenCart] = useState(false);

  const location = useLocation();
  console.log(`location ${location.pathname}`);
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
          <Button as={Link} to={`/account`}>
            <MdOutlineAccountCircle className="mr-2 h-5 w-5" />
            <span>Account</span>
          </Button>
          <Button onClick={() => setOpenCart(true)}>
            <MdOutlineShoppingCart className="mr-2 h-5 w-5" />
            <span>Cart</span>
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/about-us" className="text-sm font-semibold uppercase">
            About Us
          </Navbar.Link>
          <Navbar.Link href="/collections/books" className="text-sm font-semibold uppercase">
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

      {location && !['/login', '/register', '/account'].includes(location.pathname) && (
        <div>
          <div class="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
              alt=""
              class="w-full h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center justify-center">
              <MdEmail className="mr-2" />
              <Label htmlFor="email">Sign up for new info</Label>
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="py-2 px-4 w-80"
            />
            <Button>Register</Button>
            <p className="mt-2 text-sm flex items-center">
              <MdInfo className="mr-2" />
              Support/purchase: +xx xxxxxxxxxx
            </p>
          </div>
        </div>
      )}

      <Footer>
        <div className="w-full text-gray-900">
          <div className="grid mx-40 grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title="About us" className="text-xl" />
              <div className="mt-4 flex space-x-6 sm:mt-0">
                <Footer.LinkGroup col>
                  <span className="uppercase font-semibold">
                    Skybooks Company Limited
                  </span>
                  <span>
                    by Cao Minh Tam
                    <br />
                    This site has been designed as a school project. It is for educational
                    purposes only.
                    <br />
                    All content is based upon a fictional company.
                  </span>
                </Footer.LinkGroup>
              </div>
            </div>
            <div>
              <Footer.Title title="Policy" className="text-xl" />
              <Footer.LinkGroup col>
                <Footer.Link href="/terms-of-service">Terms of Service</Footer.Link>
                <Footer.Link href="/privacy-policy">Privacy Policy</Footer.Link>
                <Footer.Link href="/payment-policy">Payment Policy</Footer.Link>
                <Footer.Link href="/delivery-policy">Delivery Policy</Footer.Link>
                <Footer.Link href="/exchange-policy">Exchange/Return Policy</Footer.Link>
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

      {openCart && <Cart closeCart={() => setOpenCart(false)} />}
    </div>
  );
};

export default AppLayout;
