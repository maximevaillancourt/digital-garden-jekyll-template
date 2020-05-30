# frozen_string_literal: true
class BidirectionalLinksGenerator < Jekyll::Generator
  def generate(site)
    all_notes = site.collections['notes'].docs

    all_notes.each do |current_note|
      all_notes.each do |note_potentially_linked_to|
        current_note.content = current_note.content.gsub(
          /\[\[#{note_potentially_linked_to.data['title']}\]\]/i,
          "<a class='internal-link' href='#{note_potentially_linked_to.url}'>#{note_potentially_linked_to.data['title']}</a>"
        )
      end

      notes_linking_to_current_note = all_notes.filter do |e|
        e.content.include?(current_note.url)
      end

      current_note.data['backlinks'] = notes_linking_to_current_note
    end
  end
end
