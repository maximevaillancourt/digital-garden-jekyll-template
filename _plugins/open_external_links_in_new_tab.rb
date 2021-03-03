# frozen_string_literal: true
require 'nokogiri'

# If the configuration sets `open_external_links_in_new_tab` to a truthy value,
# add 'target=_blank' to anchor tags that don't have `internal-link` class
Jekyll::Hooks.register [:pages, :notes], :post_convert do |doc|
  open_external_links_in_new_tab = !!doc.site.config["open_external_links_in_new_tab"]

  if open_external_links_in_new_tab
    parsed_doc = Nokogiri::HTML(doc.content)
    parsed_doc.css("a:not(.internal-link)").each do |link|
      link.set_attribute('target', 'blank')
    end
    doc.content = parsed_doc.to_html
  end
end
