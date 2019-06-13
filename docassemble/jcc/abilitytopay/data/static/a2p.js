// Uncomment below when we are ready to render a language dropdown in UAT.

// function insertLanguageDropdown(active_lang) {
//     var language_labels = {
//         'en': 'English',
//         'es': 'Español',
//         'zh-s': '汉语',
//         'zh-t': '漢語'
//     };
//     var headerEl = $('.container.danavcontainer');
//     var languageButtonsHTML = `
//         <div class="a2p-dropdown-container">
//             <div class="dropdown a2p-language-dropdown">
//                 <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     ${language_labels[active_lang]}
//                 </a>
//                 <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                     <a class="dropdown-item" href="${url_action('language_button_clicked', { language: 'en'})}">${language_labels['en']}</a>
//                     <a class="dropdown-item" href="${url_action('language_button_clicked', { language: 'es'})}">${language_labels['es']}</a>
//                     <a class="dropdown-item" href="${url_action('language_button_clicked', { language: 'zh-s'})}">${language_labels['zh-s']}</a>
//                     <a class="dropdown-item" href="${url_action('language_button_clicked', { language: 'zh-t'})}">${language_labels['zh-t']}</a>
//                 </div>
//             </div>
//         </div>
//     `;
//     headerEl.append($(languageButtonsHTML));
// }

// $(document).on('daPageLoad', function() {
//     get_interview_variables(function(data) {
//         if (data.success) {
//             let lang = data.variables['lang'];
//             insertLanguageDropdown(lang);
//         }
//     });
// });

// Temporary hack to restyle the image upload button for clarity.
// Once we get more feedback on whether the image upload continues to be confusing,
// we should remove this code and do a deeper fix by creating our own image upload
// element.
function restyleImageUploadButton() {
    var fileInputButton = $('.file-input .input-group-btn .btn-file .hidden-xs');
    var folderIcon = $('.file-input .input-group-btn .btn-file .fa-folder-open');
    var buttonEl = $('.file-input .input-group-btn .btn-file');

    fileInputButton.text('Add a photo...');
    fileInputButton.css('padding-left', '2px');

    folderIcon.remove();
    var cameraIcon = $(window.FontAwesome.icon({ prefix: 'fas', iconName: 'camera' }).html[0]);
    buttonEl.prepend(cameraIcon);
}

/* Manually redirect the user to clear cookies
 * after an idle timeout of 60 minutes. */

var idleTime = 0;

//Increment the idle time counter every minute.
var idleInterval = setInterval(timerIncrement, 60000); // 1 minute

//Zero the idle timer on mouse movement.
$(window).mousemove(function (e) {
    idleTime = 0;
});
$(window).keypress(function (e) {
    idleTime = 0;
});

function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 60) { // 60 minutes
        window.location.href = "/user/sign-out?next=https://" + window.location.hostname;
    }
}
