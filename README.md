# Nera - a lightweight static site generator
Nera is a really simple static site generator. It creates static html files out of  
Markdown files.

## Get started
> Make sure you run at least Node version 10.2 on your system

```bash
# Create project directory and initialize npm
mkdir new-nera-project
cd new-nera-project
npm init -y

# Install dependencies
npm install @nera-npm/nera

# Install project structure
nera install

# Render the static files
nera render

# Run local server (browser-sync)
nera serve

# Local development
nera watch
```

## Directory and file structure
```
|-- assets/
|-- config/
    |-- app.yaml
|-- pages/
|-- views/
```

### Assets
Are all CSS, JavaScript, font and image files which are used on your website. During the render process all assets are copied to the `public` directory.

### Config
Here you can define global settings for your website. All the global settings should got to the `config/app.yaml`. Like lang, name, etc. They will be available in the `data.app` object within source or plugin files or as `app` object within the view files.

### Pages
Within the pages directory you add the Markdown files which actually include meta information or settings and the content of your page. Find more information about the Markdown files below.

### Views
In the views directory you put all the layout files. We use [pug](https://pugjs.org/api/getting-started.html) as a templating framework.  
In addition to the content of the markdown file there is also more data available. There is one `app` object, which includes all the properties from the `config/app.yaml` file. The other object is the `meta` object. Where `app` includes data relevant or usable on every page the `meta` object only includes data for the page itself. Therefore it includes by default all the properties and values you define in the meta section of the markdown file. In addition it includes  

__`createdAt`__  
is datetime when the markdown file was created  

__`href`__  
is the path to the current html file  

__`dirname`__  
is the dirname of the current html file  

The `meta` object could of course also include more data depending on what your plugins add to id.

## Page Markdown files
Each Markdown file which includes the content of a dedicated webpage needs to have some settings in the head. See an example below:
```markdown
---
layout: pages/default.pug
title: Homepage
---
# Content
Content goes here...
```
> Of course you can add many more so called meta data. It will be available in the view files as `meta` object.  
> In addition the basic config values are available within the `app` object.

## Links
* [Read about how Nera is used to create the Nera website](https://medium.com/@micha.becker79/building-nera-website-with-nera-4b50ed5dbff2)
