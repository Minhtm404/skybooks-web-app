import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button, Footer, Label, Navbar, TextInput } from 'flowbite-react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import {
  MdEmail,
  MdInfo,
  MdOutlineAccountCircle,
  MdOutlineShoppingCart
} from 'react-icons/md';
import { SiSass } from 'react-icons/si';

import { Context as AuthContext } from '../contexts/AuthContext';
import { Context as CartItemContext } from '../contexts/CartItemContext';

import { Cart } from './index';

const AppLayout = () => {
  const { user, isAuthenticated, localLogin } = useContext(AuthContext);
  const { cartItems, getAllCartItems } = useContext(CartItemContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [openCart, setOpenCart] = useState(false);

  useEffect(() => {
    localLogin();
    getAllCartItems();
  }, []);

  const [t, i18n] = useTranslation('global');

  const handleOpenCart = async () => {
    if (!user || !isAuthenticated) {
      navigate('/account/login');
    } else {
      setOpenCart(true);
    }
  };

  const handleChangeLanguage = () => {
    if (i18n.language === 'vi') {
      i18n.changeLanguage('en');

      localStorage.setItem('lng', 'en');
    } else {
      i18n.changeLanguage('vi');
      localStorage.setItem('lng', 'vi');
    }
  };

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
            <span>{user ? user.name : t('header.account')}</span>
          </Button>
          <Button onClick={handleOpenCart}>
            <MdOutlineShoppingCart className="mr-2 h-5 w-5" />
            <span> {t('header.cart')}</span>
          </Button>
          <Button color="light" onClick={handleChangeLanguage}>
            <img src={i18n.language === 'vi' ? '/vi.jpg' : '/en.jpg'} alt="" />
          </Button>
          <Navbar.Toggle />
        </div>

        <Navbar.Collapse>
          <Navbar.Link href="/about-us" className="text-sm font-semibold uppercase">
            {t('header.about_us')}
          </Navbar.Link>
          <Navbar.Link
            href="/collections/books"
            className="text-sm font-semibold uppercase"
          >
            {t('header.products')}
          </Navbar.Link>
          <Navbar.Link href="/new-arrival" className="text-sm font-semibold uppercase">
            {t('header.new_arrival')}
          </Navbar.Link>
          <Navbar.Link href="/posts" className="text-sm font-semibold uppercase">
            {t('header.blog')}
          </Navbar.Link>
          <Navbar.Link href="/sale" className="text-sm font-semibold uppercase">
            {t('header.sale')}
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div>
        <div>
          <Outlet context={[openCart, setOpenCart]} />
        </div>
        <div className="fixed md:static bg-main-bg w-full">
          {openCart && (
            <Cart cartItems={cartItems} closeCart={() => setOpenCart(false)} />
          )}
        </div>
      </div>

      {location && !['/login', '/register', '/account'].includes(location.pathname) && (
        <div>
          <div class="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6">
            <img
              src="/118156607_3574023635963060_7912547870699405354_o_ae6777cb0ee84ea998b4a248295eca1a.jpg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="/117737784_3567533693278721_3948937277101992230_n_db3ef1eee31e44999422ed787c3c8e52.jpg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="/110149557_3492080410824050_37431610927477581_o_46e0be6540a844abae493918b73439d8.jpg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="/92073616_3187417081290386_1520794563134881792_o_64e5d2d8464c4c1c8531eff170e67f37.jpg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="/91157893_3189263284439099_4452761306373554176_o_5ad7202f0cbb45fa9ae0feff895b0c5d.jpg"
              alt=""
              class="w-full h-auto"
            />
            <img
              src="/91689386_3189724504392977_4782049710154186752_o_c71c5dd291d646909e4ccb2fadba8c85.jpg"
              alt=""
              class="w-full h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex items-center justify-center">
              <MdEmail className="mr-2" />
              <Label htmlFor="email">{t('body.sign_up_for_new_info')}</Label>
            </div>
            <TextInput
              id="email"
              name="email"
              type="email"
              placeholder={t('body.your_email')}
              className="py-2 px-4 w-80"
            />
            <Button>{t('body.register')}</Button>
            <p className="mt-2 text-sm flex items-center">
              <MdInfo className="mr-2" />
              {t('body.support_purchase')}: +xx xxxxxxxxxx
            </p>
          </div>
        </div>
      )}

      <Footer>
        <div className="w-full text-gray-900">
          <div className="grid mx-40 grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <div>
              <Footer.Title title={t('footer.about_us')} className="text-xl" />
              <div className="mt-4 flex space-x-6 sm:mt-0">
                <Footer.LinkGroup col>
                  <span className="uppercase font-semibold">
                    {t('footer.company_name')}
                  </span>
                  <span>
                    {t('footer.product_by')}
                    <br />
                    {t('footer.description_1')}
                    <br />
                    {t('footer.description_2')}
                  </span>
                </Footer.LinkGroup>
              </div>
            </div>
            <div>
              <Footer.Title title={t('footer.policy')} className="text-xl" />
              <Footer.LinkGroup col>
                <Footer.Link href="/terms-of-service">
                  {t('footer.terms_of_service')}
                </Footer.Link>
                <Footer.Link href="/privacy-policy">
                  {t('footer.privacy_policy')}
                </Footer.Link>
                <Footer.Link href="/payment-policy">
                  {t('footer.payment_policy')}
                </Footer.Link>
                <Footer.Link href="/delivery-policy">
                  {t('footer.delivery_policy')}
                </Footer.Link>
                <Footer.Link href="/exchange-policy">
                  {t('footer.exchange_policy')}
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t('footer.head_office')} className="text-xl" />
              <Footer.LinkGroup col>
                <span>{t('footer.address')}</span>
                <span>Hotline: +84 xxx xxx xxxx</span>
                <span>Office: +8428 xxxx xxxx</span>
                <span>info@skybooks.io</span>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title={t('footer.follow_us')} className="text-xl" />
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
