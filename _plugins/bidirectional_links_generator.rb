# frozen_string_literal: true

class BidirectionalLinksGenerator < Jekyll::Generator
  def generate(site)
    notes = site.collections['notes'].docs

    notes.each do |current_note|
      notes_linking_to_current_note = notes.filter do |e|
        e.content.include?(current_note.url)
      end

      current_note.data['backlinks'] = notes_linking_to_current_note
    end
  end
end
