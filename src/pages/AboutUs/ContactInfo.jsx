import React from 'react';
import { Button, Breadcrumb, TextInput, Textarea } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

const ContactInfo = () => {
  return (
    <div>
      <Breadcrumb
        aria-label="Solid background breadcrumb example"
        className="bg-gray-50 px-5 py-3"
      >
        <div className="flex mx-40">
          <Breadcrumb.Item href="/" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us">About us</Breadcrumb.Item>
          <Breadcrumb.Item href="/about-us/stores">Stores</Breadcrumb.Item>
        </div>
      </Breadcrumb>

      <div className="py-3 grid grid-cols-2 divide-x">
        <div>Mapbox</div>

        <div className="px-14 py-3">
          <p className="text-3xl font-bold my-9">Contact info</p>
          <hr />
          <ul className="text-sm space-y-8 mt-14 mb-14">
            <li>
              <p className="text-gray-500 font-medium">Our address</p>
              <p className="font-bold">01 Somewhere St., Dist. X, Hanoi</p>
            </li>
            <li>
              <p className="text-gray-500 font-medium">Email us</p>
              <p className="font-bold uppercase">info@skybooks.io</p>
            </li>
            <li>
              <p className="text-gray-500 font-medium">Phone</p>
              <p className="font-bold">+84 28xxxxxxxx</p>
            </li>
            <li>
              <p className="text-gray-500 font-medium">Working time</p>
              <p className="font-bold">Monday to Friday from 8:30 AM to 05:30 PM</p>
            </li>
          </ul>

          <p className="text-2xl font-bold my-5">Send us a question</p>
          <hr />
          <div className="text-sm space-y-8 mt-12">
            <TextInput id="name" placeholder="Fullname" type="text" required />
            <div className="grid grid-cols-2 gap-8">
              <TextInput id="email" placeholder="Email" type="email" required />
              <TextInput id="phone" placeholder="Phone number" type="tel" required />
            </div>
            <Textarea id="message" placeholder="Message" rows={5} required />
            <Button size="xs" className="uppercase font-bold px-4 py-3">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
