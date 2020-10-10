window.onload = init;

function init() {
    initInstagramFeed();
}

function initInstagramFeed() {
    $.instagramFeed({
        'username': 'evakuator.ua.service',
        'container': "#instafeed",
        'get_data': true,
        'display_profile': false,
        'display_biography': false,
        'display_gallery': true,
        'items': 8,
        'items_per_row': 4,
        'styling': false,
        'margin': 0.5
    });
}