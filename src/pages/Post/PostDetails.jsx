import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Breadcrumb, Spinner, Toast } from 'flowbite-react';
import { HiExclamation, HiHome } from 'react-icons/hi';

import { Context as PostContext } from '../../contexts/PostContext';

const PostDetails = () => {
  const { alias } = useParams();
  const { posts, post, getPostByAlias, isLoading, setIsLoading, error } =
    useContext(PostContext);

  useEffect(() => {
    setIsLoading(true);
    getPostByAlias(alias);
  }, [alias]);

  const [t, i18n] = useTranslation('global');

  if (isLoading) {
    return (
      <div className="relative w-full h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
  }

  if (post) {
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
              {t('body.home')}
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/posts">{t('header.blog')}</Breadcrumb.Item>
          </div>
        </Breadcrumb>

        <div className="mx-40 px-5 py-3 grid grid-cols-4">
          <div className=" col-span-1 border-2 mt-4 mr-4 py-5">
            <h3 className="text-center font-semibold uppercase mb-4">{t('blog.new_posts')}</h3>

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

          <div className="col-span-3 my-8 space-y-4">
            <p className="text-center text-2xl font-medium">{post.title}</p>
            <p className="text-center text-sm">
              <span className="text-gray-600">{t('blog.written_by')} {post.user.name} {t('blog.on')} </span>
              {new Date(post.createdAt).toDateString()}
            </p>
            <img src={`${post.imageCover}/`} alt="" />
            <div className="space-y-2 text-justify">
              {post.content.split('/n').map(p => (
                <p className="text-sm">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default PostDetails;
