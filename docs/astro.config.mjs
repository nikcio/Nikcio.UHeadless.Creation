import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://nikcio.github.io',
  base: '/Nikcio.UHeadless.Creation',
  integrations: [
    starlight({
      title: 'Nikcio.UHeadless.Creation',
      social: {
        github: 'https://github.com/nikcio/nikcio.uheadless/',
      },
      editLink: {
        baseUrl: 'https://github.com/nikcio/Nikcio.UHeadless.Creation/tree/'
      },
      sidebar: [
        {
          label: 'Welcome',
          items: [
            { label: 'Overview', link: '/overview/' },
            { label: 'Version 5', link: '/v5/start/' },
          ],
        },
        {
          label: 'Fundamentals',
          items: [
            { label: 'Getting started', link: 'v5/fundamentals/getting-started/' },
            { label: 'Extend', link: 'v5/fundamentals/extend-uheadless/' },
            {
              label: 'Querying',
              collapsed: true,
              items: [
                { label: 'Content', link: 'v5/fundamentals/querying/content/' },
                { label: 'Media', link: 'v5/fundamentals/querying/media/' },
                { label: 'Members', link: 'v5/fundamentals/querying/members/' },
                { label: 'Properties', link: 'v5/fundamentals/querying/properties/' }
              ]
            },
          ]
        },
        {
          label: 'Extending',
          items: [
            { label: 'Content', link: 'v5/extending/content/' },
            { label: 'Media', link: 'v5/extending/media/' },
            { label: 'Member', link: 'v5/extending/member/' },
            {
              label: 'Properties',
              collapsed: true,
              items: [
                { label: 'Overview', link: 'v5/extending/properties/overview/' },
                { label: 'Rich text', link: 'v5/extending/properties/rich-text/' },
                { label: 'Media picker', link: 'v5/extending/properties/media-picker/' },
                { label: 'Block list', link: 'v5/extending/properties/block-list/' },
                { label: 'Custom editor', link: 'v5/extending/properties/custom-editor/' },
              ]
            },
          ]
        },
        {
          label: 'Reference',
          items: [
            { label: 'Options', link: 'v5/reference/options/' },
            {
              label: 'Content',
              collapsed: true,
              items: [
                { label: 'Content Reference', link: 'v5/reference/content/overview/' },
                { label: 'Content Bases', link: 'v5/reference/content/bases/' },
                { label: 'Content Basics', link: 'v5/reference/content/basics/' }
              ]
            },
            {
              label: 'Media',
              collapsed: true,
              items: [
                { label: 'Media Reference', link: 'v5/reference/media/overview/' },
                { label: 'Media Bases', link: 'v5/reference/media/bases/' },
                { label: 'Media Basics', link: 'v5/reference/media/basics/' }
              ]
            },
            {
              label: 'Members',
              collapsed: true,
              items: [
                { label: 'Members Reference', link: 'v5/reference/members/overview/' },
                { label: 'Members Bases', link: 'v5/reference/members/bases/' },
                { label: 'Members Basics', link: 'v5/reference/members/basics/' }
              ]
            },
            {
              label: 'Properties',
              collapsed: true,
              items: [
                { label: 'Properties Reference', link: 'v5/reference/properties/overview/' },
                { label: 'Properties Bases', link: 'v5/reference/properties/bases/' },
                { label: 'Properties Basics', link: 'v5/reference/properties/basics/' }
              ]
            },
          ]
        },
        {
          label: 'Older versions',
          collapsed: true,
          items: [
          ]
        }
      ],
    }),
  ],
});
