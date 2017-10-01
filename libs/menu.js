const menu = [
  {
    label: 'Customize',
    uri: 'customize',
    pages: [
      { title: 'Layouts', uri: '/customize/screen-layout' }
    ]
  },
  {
    label: 'Build',
    pages: [
      { title: 'Components', uri: '/build/components' },
      { title: 'Themes', uri: '/build/themes' },
      { title: 'Menus', uri: '/build/menus' }
    ]
  },
  {
    label: 'CLI',
    pages: [
      { title: 'Getting started', uri: '/cli/quickstart' },
      { title: 'Publishing on Fliplet', uri: '/cli/publish' },
      { title: 'Retrieve and update your components', uri: '/cli/manage-components' }
    ]
  },
  {
    label: 'References',
    pages: [
      { title: 'Components', uri: '/reference/components' },
      { title: 'JS API', uri: '/reference/api/js' },
      { title: 'RESTful API', uri: '/reference/api/rest' }
    ]
  }
]

module.exports.middleware = function (req, res, next) {
  res.locals.menu = menu;
  next();
}