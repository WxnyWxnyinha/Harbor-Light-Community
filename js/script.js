$(document).ready(function(){
    // Inicialização do Carrossel Slick
    $('.carousel-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    });

    // Validação do Formulário de Contato
    $('#contactForm').on('submit', function(event) {
        event.preventDefault();

        $('#formSuccessMessage').hide();
        let isValid = true;
        $('.error-message').remove();
        $('input, textarea').css('border-color', '');

        const nomeInput = $('#nome');
        if (nomeInput.val().trim() === '') {
            isValid = false;
            showError(nomeInput, 'O campo nome é obrigatório.');
        }

        const emailInput = $('#email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.val().trim() === '') {
            isValid = false;
            showError(emailInput, 'O campo email é obrigatório.');
        } else if (!emailRegex.test(emailInput.val().trim())) {
            isValid = false;
            showError(emailInput, 'Por favor, insira um email válido.');
        }

        const mensagemInput = $('#mensagem');
        if (mensagemInput.val().trim() === '') {
            isValid = false;
            showError(mensagemInput, 'O campo mensagem é obrigatório.');
        }

        if (isValid) {
            $('#formSuccessMessage').slideDown();
            $('#contactForm')[0].reset();
            setTimeout(function() {
                $('#formSuccessMessage').slideUp();
            }, 5000);
        }
    });

    function showError(inputElement, message) {
        inputElement.css('border-color', '#EF7B45');
        const error = $('<div class="error-message" style="color: #EF7B45; font-size: 0.9em; margin-top: 5px;"></div>').text(message);
        inputElement.after(error);
    }

    // LÓGICA DO BOTÃO VOLTAR AO TOPO
    $(window).on('scroll', function() {
        const backToTopButton = $('.back-to-top');
        if ($(this).scrollTop() > 300) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
    });

    $('.back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
});

// ANIMAÇÕES COM SCROLLREVEAL
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    // LINHA CORRIGIDA PARA INCLUIR OS ELEMENTOS DA SEÇÃO DE EVENTOS
    sr.reveal('section h2, .sobre-container, .servicos-grid, .carousel-container, .equipe-container, section#eventos > p, .evento-card, footer');
}