const menu = [
  {
    label: 'Customize',
    uri: 'customize',
    pages: [
      { title: 'Making changes to your screens layout', uri: 'screen-layout' },
      { title: 'Managing and creating new editable sections', uri: 'editable-sections' },
      { title: 'Extending your layout functionalities', uri: 'extend' }
    ]
  },
  {
    label: 'Build',
    pages: [
      { title: 'Components' },
      { title: 'Themes' },
      { title: 'Menus' }
    ]
  },
  {
    label: 'CLI',
    pages: [
      { title: 'Getting started' },
      { title: 'Publishing on Fliplet' },
      { title: 'Retrieve and update your components' }
    ]
  },
  {
    label: 'References',
    pages: [
      { title: 'Components' },
      { title: 'JS API' },
      { title: 'RESTful API' }
    ]
  }
]

module.exports.middleware = function (req, res, next) {
  res.locals.menu = menu;
  next();
}