const footer = Vue.component('footer-block', {
    template: `<footer class="footer">
                    <div class="footer__wrapper container">
                        <div class="footer__contacts">
                            <p>+7(999)999-99-99</p>
                            <p>mail@mail.com</p>
                        </div>
                        <div class="footer__links">
                            <a href="#"><img src="../img/whatsapp.png" width="32px" height="32px"></a>
                            <a href="#"><img src="../img/vk.png" width="32px" height="32px"></a>
                            <a href="#"><img src="../img/telegram.png" width="32px" height="32px"></a>
                        </div>
                    </div>
                </footer>`
})
export default {
    footer: footer
}