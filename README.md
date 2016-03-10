todo-list
=========

Rails with Backbone + Marionette app developed with <3.

It's on Heroku, [check it here](https://gt-todo-list.herokuapp.com/)!


### Setup

#### Pre-setup Requirements:

- Ruby 2.0.0 - preferably with [RVM](https://rvm.io/)
- PostgreSql 9.5

**IMPORTANT**: Remember to have a configured PostgreSql user!

#### Installation

Clone the project and enter to the directory and run `/bin/setup` script

```bash
git clone git@github.com:guilhermeteodoro/todo-list.git
cd todo-list/
ruby bin/setup
```

Which will setup both `.env` `.rvmrc` files and `bundle install`.

***Maybe it'll be necessary to `cd .` to force rvm to generate gemset**

Create database and run migrations

```bash
rake db:create
rake db:migrate
```

### How to use

Just start the server `rails s` and visit http://localhost:3000

Enjoy ;P