 $(document).ready(function() {
    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4'],
        navigation: {
            'position': 'right',
            'tooltips': ['About', 'Skills', 'Work Experience & Project', 'Contact']
        },

        onLeave: function(origin, destination, direction) {
            const heading = document.querySelector(`#section${destination} h2`);
            if (heading) animateTyping(heading);
          },
        afterRender: function() {
            $('#pp-nav').addClass('custom');
            const firstHeading = document.querySelector("#section1 h2");
            if (firstHeading) animateTyping(firstHeading);
        },
        afterLoad: function(anchorLink, index) {
            if (index > 1) {
                $('#pp-nav').removeClass('custom');
            } else {
                $('#pp-nav').addClass('custom');
            }

            // Tìm các phần tử có AOS trong section đang hiện
            var $currentSection = $('.section').eq(index - 1);
            $currentSection.find('[data-aos]').each(function(){
              // Reset trạng thái
              $(this).removeClass('aos-animate'); // xóa class đã chạy
              void this.offsetWidth; // trigger reflow
            });

            // Gọi lại refresh để AOS kiểm tra lại
            AOS.refresh();
        }
    });

    function animateTyping(heading) {
      const textLength = heading.textContent.length;
      heading.style.animation = 'none';
      heading.offsetHeight; // trigger reflow
      heading.style.animation = `title-line 1s steps(${textLength}, end) forwards, title-border 1s step-end `;
    }

    /*
    * Internal use of the demo website
    */
    // $('#showExamples').click(function(e){
    //     e.stopPropagation();
    //     e.preventDefault();
    //     $('#examplesList').toggle();
    // });

    // $('html').click(function(){
    //     $('#examplesList').hide();
    // });
});