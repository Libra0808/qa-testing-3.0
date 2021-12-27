function navbar_nav_tags(navbar_nav_id, nav_link_id, dropdown_menu_id) {
   // navbar-nav > nav-item
   let nav_item = document.createElement("li");
   nav_item.setAttribute("class", "nav-item dropdown");
   // navbar-nav > nav-item > nav-link
   let nav_link = document.createElement("button");
   nav_link.setAttribute("class", "nav-link dropdown-toggle");
   // text-capitalize
   nav_link.setAttribute("data-bs-toggle", "dropdown");
   nav_link.setAttribute("id", nav_link_id);
   nav_link.innerText = nav_link_id;
   // navbar-nav > nav-item > nav-link > dropdown-menu
   let dropdown_menu = document.createElement("ul");
   dropdown_menu.setAttribute("class", "dropdown-menu");
   dropdown_menu.setAttribute("id", dropdown_menu_id);
   // inserting nav link and dropdown menu  in nav item 
   nav_item.append(nav_link);
   nav_item.append(dropdown_menu);
   // inserting nav link in navbar nav
   let navbar_nav = document.getElementById(navbar_nav_id);
   navbar_nav.append(nav_item);
}

function navlinktext(id, aid, text) {
   let ele = document.getElementById(id);
   let li = document.createElement("li");
   let btn = document.createElement("button");
   btn.setAttribute("class", "dropdown-item");
   btn.setAttribute("id", aid);
   btn.innerText = text;
   li.append(btn);
   ele.append(li);
}

//navlinktext(id,nav_link_id,dropdown_menu_id);

// HTML tag
navbar_nav_tags("navbar_nav", "HTML tags", "html_tags_links");
// HTMLs inner tags
navlinktext("html_tags_links", "heading", "Heading");
navlinktext("html_tags_links", "paragrap", "Paragrap");
navlinktext("html_tags_links", "link", "Link");
navlinktext("html_tags_links", "list", "Lists");
navlinktext("html_tags_links", "table", "Table");
navlinktext("html_tags_links", "details", "Details");

// Elements tag 
navbar_nav_tags("navbar_nav", "elements", "elements_links");
// Elements inner tags
navlinktext("elements_links", "text_box", "Text Box");
navlinktext("elements_links", "check_box", "Checkbox");
navlinktext("elements_links", "radio_box", "Radio Box");
navlinktext("elements_links", "web_tables", "Web Tables");
navlinktext("elements_links", "buttons", "Buttons");
navlinktext("elements_links", "links", "Links");
navlinktext("elements_links", "broken_link", "Broken Link");
navlinktext("elements_links", "up_and_down", "Upload and Download");
navlinktext("elements_links", "dynamic_properties", "Dynamic Properties");

// Forms tag
navbar_nav_tags("navbar_nav", "forms", "forms_links");
// Forms inner tags
//navlinktext("forms_links", "register_form", "Register Form");
navlinktext("forms_links", "application_form", "Application Form");

// Alerts and Windows tag
navbar_nav_tags("navbar_nav", "alerts & windows", "alerts_links");
// Alerts and Windows inner tags
navlinktext("alerts_links", "browser_window", "Browser Window");
navlinktext("alerts_links", "alerts", "Alerts");
navlinktext("alerts_links", "frames", "Frames");
navlinktext("alerts_links", "nested_frames", "Nested Frames");
navlinktext("alerts_links", "modal_dialogs", "Modal Dialogs");

// Widgets tag
navbar_nav_tags("navbar_nav", "widgets", "widgets_links");
// Widgets inner tags
navlinktext("widgets_links", "accordion", "Accordion");
navlinktext("widgets_links", "auto_complete", "Auto Complete");
navlinktext("widgets_links", "date_picker", "Date Picker");
navlinktext("widgets_links", "slider", "Slider");
navlinktext("widgets_links", "progress_bar", "Progress Bar");
navlinktext("widgets_links", "tabs", "Tabs");
navlinktext("widgets_links", "tool_tips", "Tools Tips");
navlinktext("widgets_links", "menu", "Menu");
navlinktext("widgets_links", "select_menu", "Select Menu");
navlinktext("widgets_links", "popover", "Popover");
navlinktext("widgets_links", "toasts", "Toasts");
navlinktext("widgets_links", "dropdowns", "Dropdowns");
navlinktext("widgets_links", "carousel", "Carousel");

// Widgets tag
navbar_nav_tags("navbar_nav", "interactions", "interactions_links");
// Widgets inner tags
navlinktext("interactions_links", "sortable", "Sortable");
navlinktext("interactions_links", "selectable", "Slectable");
navlinktext("interactions_links", "resizable", "Resizable");
//navlinktext("interactions_links", "droppable", "Droppable");
navlinktext("interactions_links", "draggable", "Draggable");

// // Media tag
// navbar_nav_tags("navbar_nav", "media", "medias_links");
// // Widgets inner tags
// navlinktext("medias_links", "image", "Image");
// navlinktext("medias_links", "audio", "Audio");
// navlinktext("medias_links", "video", "Video");

// New tag
navbar_nav_tags("navbar_nav", "New", "new_tags_links");
// New tag inner tags
navlinktext("new_tags_links", "color_picker", "Color Picker");
navlinktext("new_tags_links", "dynamic_id", "Dynamic Id");
navlinktext("new_tags_links", "hightlight_text_search", "Hightlight Text Search");
navlinktext("new_tags_links", "tagging", "Tagging");