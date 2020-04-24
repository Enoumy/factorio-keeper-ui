# Factorio Keeper UI

> Angular server that handles the frontend side of Factorio Blueprint Keeper!

## Introduction

[**Factorio**](https://factorio.com/) is one of my favorite games. It's a factory
building game where you can build your own factory as simple or as complicated as
you may want it to be. One of the mechanics of the game allows you to save a
part of your factory in the form of a **blueprint**. These blueprints can later
be used to plan out future expansions, _and even automatic expansions_, of your
factory. However, all the blueprints in your game are local to your machine.

![Factorio background](https://hb.imgix.net/cb5424b775d4a6ac28320eb5b30dcc7b97963185.jpg?auto=compress,format&fit=crop&h=353&w=616&s=cf3e481fa618c41377308a1ecd902e1d)

**Factorio Blueprint Keeper** allows users to post their own blueprints and
download all of their blueprints in one go in the form of a blueprint book
string that users can copy paste directly into their games!

## Installation

In order to install this backend server you need to install
[git](https://git-scm.com/), [node npm](https://nodejs.org/en/)
and [Angular cli](https://cli.angular.io/), preferably in that order.

You must first clone this repository with:

```bash
$ git clone https://github.com/Enoumy/factorio-keeper-ui.git
```

Afterwards, you must install the dependencies of the server by cd'ing into
the cloned repository and running:

```bash
$ npm i
```

## Usage

> Note: in order for the UI to work properly, it needs to communicate to a
> backend server. This backend server can be setup with the instructions at
> this repository: [enoumy/factorio-keeper-db](https://github.com/Enoumy/factorio-keeper-db)

Starting up the Angular server that users can get their frontend client from
can be done with a single command. It is important to note that you must
have installed the [Angular cli](https://cli.angular.io/) in order for this
step to work.

```bash
$ ng serve --open
```

This will start the Angular server where users can get their frontend ui
from through their browser. The `--open` flag makes it so that a new browser
tab is opened when the server starts. The Angular server should have been opened
at `localhost:4200`.

Once you're done using the server, you can close it by hitting `ctrl + c` on the
console that you opened it with.

## Views

The website for this project includes multiple pages. Each one of them has a
different role in helping the user manage blueprints.

| Route                    | Description                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------ |
| /                        | Homepage                                                                             |
| /blueprints              | List of blueprints ordered from most recent to oldest                                |
| /blueprint/:blueprint_id | View of single blueprint. The blueprint string of the blueprint can be copied here.  |
| /profile                 | Username lookup search bar.                                                          |
| /profile/:profile_id     | View of a user's profile. The entire blueprints can be copied as a book string here. |
| /upload                  | Users can upload their blueprints on this page.                                      |
| \*\* (Any other route)   | Cool looking 404 Page                                                                |
