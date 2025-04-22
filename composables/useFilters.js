export function useSlugify() {
  return function (text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };
}

export function useStripTags() {
  return function (html, decodeEntities = false) {
    const div = document.createElement('div');
    div.innerHTML = html;
    const text = div.textContent || div.innerText || '';
    return decodeEntities ? decodeHTMLEntities(text) : text;
  };
}

export function decodeHTMLEntities(text) {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
}

export function formatDate(dateString, locale) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    let formattedDate;
    if(locale == 'en'){
      formattedDate = date.toLocaleDateString('en-US', options);
    } else if (locale == 'zh'){
      formattedDate = date.toLocaleDateString('zh-Hans', options);
    } else if (locale == 'es'){
      formattedDate = date.toLocaleDateString('fr', { month: 'numeric', day: 'numeric', year: 'numeric' });
    } else if (locale == 'fr'){
      formattedDate = date.toLocaleDateString('fr', { month: 'numeric', day: 'numeric', year: 'numeric' });
    } else if (locale == 'ar'){
      formattedDate = date.toLocaleDateString('fr', { month: 'numeric', day: 'numeric', year: 'numeric' });
    }
    // Add ordinal suffix to day
    const day = date.getDate();
    let daySuffix;
    if (day > 3 && day < 21) {
        daySuffix = 'th';
    } else {
        switch (day % 10) {
            case 1: daySuffix = 'st'; break;
            case 2: daySuffix = 'nd'; break;
            case 3: daySuffix = 'rd'; break;
            default: daySuffix = 'th'; break;
        }
    }

    if(locale == 'en'){
      return formattedDate.replace(/\d+/, day + daySuffix);
    } else {
      return formattedDate
    }
}
