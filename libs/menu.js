const menu = [
  {
    label: 'Customize',
    uri: 'customize',
    pages: [
      { title: 'Making changes to your screens layout', uri: 'customize/screen-layout' },
      { title: 'Managing and creating new editable sections', uri: 'customize/editable-sections' },
      { title: 'Extending your layout functionalities', uri: 'customize/extend' }
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
      { title: 'Components', uri: '/docs/components' },
      { title: 'JS API', uri: '/docs/api/js' },
      { title: 'RESTful API', uri: '/docs/api/rest' }
    ]
  }
]

module.exports.middleware = function (req, res, next) {
  res.locals.menu = menu;
  next();
}