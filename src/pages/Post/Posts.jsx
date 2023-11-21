import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Spinner, Toast } from 'flowbite-react';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as PostContext } from '../../contexts/PostContext';

const Post = () => {
  const { posts, getAllPosts, isLoading, setIsLoading, error } = useContext(PostContext);

  useEffect(() => {
    setIsLoading(true);
    getAllPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (posts) {
    return (
      <div className="mb-8">
        {error ? (
          <Toast className="absolute top-4 left-4">
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <HiExclamation className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">{error}</div>
            <Toast.Toggle />
          </Toast>
        ) : (
          <></>
        )}

        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
        >
          <div className="flex mx-40">
            <Breadcrumb.Item href="/" icon={HiHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/posts">Blog</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 px-5 py-3 grid grid-cols-4">
          <div className="col-span-1 border-2 mt-4 mr-4 py-5">
            <h3 className="text-center font-semibold uppercase mb-4">New Posts</h3>

            <hr />

            {posts.map(p => {
              const href = `/posts/${p.slug}`;

              return (
                <Link to={href} className="flex items-center gap-5 border-b-2 m-2 p-4">
                  <div>
                    <p>{p.title}</p>
                    <p className="text-sm">
                      <span className="text-gray-600">{p.user.name} </span>
                      {new Date(p.createdAt).toDateString()}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="col-span-3 mb-3">
            <p className="text-3xl font-semibold my-5">Blog</p>

            <div className="text-sm text-gray-900 space-y-8">
              {posts.map(p => {
                const href = `/posts/${p.slug}`;

                return (
                  <div className="flex items-center gap-5 text-justify">
                    <div className="space-y-2">
                      <Link to={href} className="font-medium text-base">
                        {p.title}
                      </Link>
                      <p className="text-sm">
                        <span className="text-gray-600">Written by {p.user.name} / </span>
                        {new Date(p.createdAt).toDateString()}
                      </p>
                      <p className="text-sm">
                        {p.content.length > 300
                          ? p.content.slice(0, 300).concat('...')
                          : p.content}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Post;
