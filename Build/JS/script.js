const modal = document.querySelector( ".js-modal" );
const openModal = document.querySelector( ".js-open-modal" );

openModal.addEventListener( "submit", () =>
{
    modal.showModal();
} );
