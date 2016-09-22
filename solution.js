(function() {
    Dropzone.options.imagePreview = {
      url: '#',
      maxFiles: 1,
      addRemoveLinks: true,
      autoProcessQueue: false,
      acceptedFiles: 'image/*',
      dictDefaultMessage: 'Drag &amp; Drop Image Here.',
      init: function() {
        var dropzone = this;
        dropzone.on('addedfile', function() {
          if (dropzone.files[1] != null) {
            dropzone.removeFile(dropzone.files[0]);
          }
        });
      }
    }
})();