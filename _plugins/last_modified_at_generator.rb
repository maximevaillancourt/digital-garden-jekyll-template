# frozen_string_literal: true

require 'fileutils'
require 'pathname'
require 'jekyll-last-modified-at'

module Recents
  # Generate change information for all markdown pages
  class Generator < Jekyll::Generator
    def generate(site)
      items = site.collections['notes'].docs
      items.each do |page|
        timestamp = Jekyll::LastModifiedAt::Determinator.new(site.source, page.path, '%FT%T%:z').to_s
        page.data['last_modified_at_timestamp'] = timestamp
      end
    end
  end
end
