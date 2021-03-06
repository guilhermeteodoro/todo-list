require File.expand_path('../boot', __FILE__)

require 'rails/all'

if defined?(Bundler)
  Bundler.require(*Rails.groups(:assets => %w(development test)))
end

Dotenv::Railtie.load if %w(development test).include? Rails.env

module TodoList
  class Application < Rails::Application
    config.assets.paths << Rails.root.join('vendor', 'assets', 'javascripts', 'bower_components')
    config.time_zone = 'Brasilia'
    config.encoding = "utf-8"
    config.filter_parameters += [:password]
    config.active_support.escape_html_entities_in_json = true
    config.active_record.whitelist_attributes = false
    config.assets.enabled = true
    config.assets.version = '1.0'
    config.assets.initialize_on_precompile = false
  end
end