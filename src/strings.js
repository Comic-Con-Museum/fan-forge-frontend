
const data = {
  en: {
    wizard_title: 'Have an idea of your own? ',
    wizard_intro: 'That\'s awesome! We will show you a live preview of your post on the right as we walk you through the process on the left.',
    wizard_title2: 'Let\'s get down to basics',
    wizard_exhibit_name: 'Exhibit name',
    wizard_short_summary: 'Short summary',
    wizard_select_thumbnail: 'Select thumbnail',
    wizard_additional_images: 'Additional images',
    wizard_inspiration: 'What\'s your inspiration in this exhibit?',
    wizard_complex: 'Now to some more complex things',
    wizard_provided: 'Provide us with a detailed description of this exhibit, including all necessary background knowledge.',
    wizard_tellus: 'Tell us the kind of things you want to see in this exhibit.',
    wizard_title3: 'Time to double check',
    wizard_looksgreat: 'Make sure everything look good over in the preview and then click Finish.',
    wizard_selectfiles: 'files selected',
    wizard_thumbnail: 'thumbnail selected',
    wizard_addTags: 'Add tags to your exhibit*',
    wizard_inviteFriends: 'Collaborate with your friends!',
    wizard_sendInvite: 'Send invite',
    next: 'Next',
    back: 'Back',
    finish: 'Finish',
    preview: 'Preview'
  },
  es: {
    wizard_title: '¿Tienes una idea tuya?',
    wizard_intro: '¡Eso es genial! Le mostraremos una vista previa en vivo de su publicación a la derecha mientras lo guiamos a través del proceso a la izquierda.',
    wizard_title2: 'Vayamos a lo básico',
    wizard_exhibit_name: 'Nombre de la exposición',
    wizard_short_summary: 'Breve resumen',
    wizard_select_thumbnail: 'Seleccione miniatura',
    wizard_additional_images: 'Imágenes adicionales',
    wizard_inspiration: '¿Cuál es tu inspiración en esta exhibición?',
    wizard_complex: 'Ahora a algunas cosas más complejas',
    wizard_provided: 'Bríndenos una descripción detallada de esta exhibición que incluya todo el conocimiento previo necesario.',
    wizard_tellus: 'Cuéntanos el tipo de cosas que quieres ver en esta exhibición.',
    wizard_title3: 'Es hora de volver a verificar',
    wizard_looksgreat: 'Asegúrese de que todo se vea bien en la vista previa y luego haga clic en Finalizar.',
    wizard_selectfiles: 'archivos seleccionados',
    wizard_thumbnail: 'miniatura seleccionada',
    wizard_addTags: 'Agrega etiquetas a tu exhibición *',
    wizard_inviteFriends: 'Colabora con tus amigos!',
    wizard_sendInvite: 'Enviar invitación',
    next: 'Siguiente',
    back: 'Espalda',
    finish: 'Finalizar',
    preview: 'Avance'
  }
};

let lang = 'en';
let appRender;

module.exports = {
  // holds the application to force refresh on language change
  setApp: function(app) {
    appRender = app;
  },
  // sets the language used, refreshing UI
  setLang: function (language) {
    lang = language;
    if (appRender) {
      appRender.forceUpdate(); // refresh the UI
    }
  },
  getLang: function() {
    return lang;
  },
  getString: function (title) {
    return data[lang][title];
  }
};
