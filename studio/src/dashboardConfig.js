export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f7cdceec162250102af1f46',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-1-studio-qej7czc8',
                  apiId: '3ad0c981-0866-4a6a-a43b-d62b095c1a99'
                },
                {
                  buildHookId: '5f7cdcee5d1d4f0148f728c7',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-1-web-fyd7z96e',
                  apiId: '7f045ca3-9e15-419a-a0ee-401ea4e3ed6a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/worldsoup/sanity-gatsby-blog-1',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-1-web-fyd7z96e.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
