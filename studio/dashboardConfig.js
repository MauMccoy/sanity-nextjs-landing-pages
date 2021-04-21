export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6080afb898f34f430316bb17',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qche867q',
                  apiId: '23763c7c-7230-48c6-9d45-3056d1070a36'
                },
                {
                  buildHookId: '6080afb9863ec050136caeef',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dmus33yu',
                  apiId: 'c6a67901-b44e-4c6c-8205-f19b3d7380ef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MauMccoy/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dmus33yu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
