<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__content-main">
          <div class="logo logo--white" v-html="logo"></div>
          <div class="footer-items">
            <div class="footer-item footer-item--contacts">
              <h4>Телефони для довідок:</h4>
              <ul class="footer-item__phones">
                <li><a href="tel:380444909505">+38 044 490-95-05;</a></li>
                <li><a href="tel:380934904900">+38 093 490-490-0</a></li>
              </ul>
              <ul class="footer-item__lists">
                <li>
                  <span class="footer-link-style">Умови надання послуг</span>
                </li>
                <li>
                  <span class="footer-link-style"
                    >Політика конфіденційності</span
                  >
                </li>
              </ul>
            </div>
            <div class="footer-item">
              <h4>Методи оплати:</h4>
              <ul class="footer-item__lists">
                <li>
                  <span class="footer-link-style"
                    >Оплата кредитною карткою</span
                  >
                </li>
                <li>
                  <span class="footer-link-style">Банківським платежем</span>
                </li>
                <li><span class="footer-link-style">Оплата готівкою</span></li>
              </ul>
            </div>
            <div class="footer-item">
              <h4>Корисно знати:</h4>
              <ul class="footer-item__lists">
                <li>
                  <nuxt-link class="footer-link-style" to="/news"
                    >Новини</nuxt-link
                  >
                </li>
                <li><span class="footer-link-style">Всі знижки</span></li>
                <li>
                  <span class="footer-link-style">Навчання з нами - це</span>
                </li>
              </ul>
            </div>
            <div class="footer-item">
              <h4>Дізнавайтесь новини першим:</h4>
              <div class="footer-item__news">
                <Subscription />
                <p>
                  Ви будете отримувати регулярно новини та повідомлень
                  електронною поштою
                </p>
                <Socials label layout="first" />
              </div>
            </div>
          </div>
        </div>
        <div class="copyrights">
          <div class="copyrights__left">
            <p>© 2021 | Усі права захищено</p>
          </div>
          <div class="copyrights__right">
            <p>
              <span>By</span>
              <a
                title="Internet Agency 'Tangram' — Web Development, E-commerce solutions, Web Design, Creative Design, Internet marketing"
                href="https://tangram-studio.com/"
                target="_blank"
                v-html="TangramLogo"
              ></a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Subscription from './Subscription'
import Socials from './Socials'
import logo from '@/assets/icons/logo.svg?raw'
import TangramLogo from '@/assets/icons/tangram.svg?raw'
export default {
  name: 'Footer',
  components: { Socials, Subscription },
  data() {
    return {
      logo,
      TangramLogo
    }
  }
}
</script>
