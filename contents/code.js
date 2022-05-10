code *, pre * {
  font-size: 14px;
}

.inline-code, code.inline, span.inline {
  display: inline-flex;
  padding: 0 5px;
  color: var(--accent-color);
}
.inline-code:before, code.inline:before, span.inline:before {
  content: "`";
}
.inline-code:after, code.inline:after, span.inline:after {
  content: "`";
}

.page__main-content {
  padding: 2rem;
}
@media (max-width: 1024px) {
  .page__main-content {
    padding: 2rem;
  }
}
.page__main-content h1, .page__main-content h2, .page__main-content h3, .page__main-content h4, .page__main-content h5, .page__main-content h6 {
  color: var(--text-title-color);
}
.page__main-content .border-icon {
  margin: 3px;
  border: 1px solid var(--color-gray-20);
}
.page__main-content a {
  padding: 0 5px;
}
.page__main-content p:not(pre, code), .page__main-content ul:not(pre, code), .page__main-content li:not(pre, code), .page__main-content a:not(pre, code) {
  font-size: 1rem;
  line-height: 1.8rem;
}
.page__main-content p:first-letter, .page__main-content .content:first-letter {
  text-transform: uppercase;
}
.page__main-content .beyond-element-image {
  box-shadow: var(--shadow-4);
}
.page__main-content .beyond {
  color: var(--primary);
}
.page__main-content a {
  color: var(--primary);
}
.next__content {
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid var(--secondary-accent);
}
.next__content.link__content {
  display: grid;
  justify-content: right;
}
.next__content.link__content ul {
  cursor: pointer;
  padding: 0;
  text-align: right;
}
.next__content.link__content ul li {
  list-style: none;
  margin: 5px;
  text-align: right;
  display: flex;
  justify-content: right;
}
.next__content.link__content ul li a {
  text-decoration: none;
  display: flex;
  padding: 2px 8px;
  color: var(--primary-light);
}
.next__content.link__content ul li a:hover {
  text-decoration: underline;
}
.content .beyond-icon {
  fill: var(--primary-dark);
}

ul.icon__list {
  list-style: none;
}
ul.icon__list .beyond-icon {
  background: var(--accent-color);
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  align-content: center;
}
ul.icon__list .beyond-icon *, ul.icon__list .beyond-icon g {
  fill: var(--text-on-primary);
  color: var(--text-on-primary);
}
ul.icon__list li {
  display: grid;
  margin: 8px 0;
  grid-template-columns: auto 1fr;
  grid-gap: 15px;
}
ul.icon__list li .beyond-icon {
  width: 25px;
}
.beyond-element-image {
  transition: 200ms ease-in all;
  cursor: pointer;
}
.beyond-element-image:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .modal-content .beyond-element-image {
    max-width: 90%;
  }
}
.content__quiz {
  margin-top: 4rem;
  border-top: var(--color-gray-20) 1px solid;
  text-align: right;
  display: grid;
  padding-top: 1rem;
  grid-gap: 1rem;
}
.content__quiz .quiz__actions .beyond-icon-button {
  cursor: pointer;
}
.content__quiz .quiz__actions .beyond-icon-button svg {
  height: 2rem;
  stroke-width: 2px;
  transform: rotate(-10deg);
}
.content__quiz .quiz__actions .beyond-icon-button.to-bottom svg {
  transform: rotate(170deg);
}
.content__quiz h4 {
  margin: 0;
}
.docs__aside-navbar {
  position: relative;
}
.docs__aside-navbar .aside__container {
  position: sticky;
  top: 80px;
  padding-top: 15px;
}
.docs__aside-navbar .aside__container h4 {
  margin: 15px;
}
.docs__aside-navbar ol, .docs__aside-navbar ul {
  margin: 0;
  padding: 0;
  font-size: 0.9rem;
}
.docs__aside-navbar ol li, .docs__aside-navbar ul li {
  padding: 3px 15px;
  list-style: none;
  border-left: 2px solid transparent;
}
.docs__aside-navbar ol li.item--active, .docs__aside-navbar ol li:hover, .docs__aside-navbar ul li.item--active, .docs__aside-navbar ul li:hover {
  border-left: 2px solid var(--secondary-accent);
}
.docs__aside-navbar ol li.item--active a, .docs__aside-navbar ol li:hover a, .docs__aside-navbar ul li.item--active a, .docs__aside-navbar ul li:hover a {
  color: var(--text-hover-color);
}
.docs__aside-navbar ol li a, .docs__aside-navbar ul li a {
  font-size: 0.9rem;
  text-decoration: none;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.block__note {
  border: 1px solid var(--color-yellow-90);
  padding: 15px;
  border-left-width: 8px;
  background: var(--color-yellow-30);
  font-size: 1.2rem;
  color: var(--gray-darker);
  line-height: 1.8rem;
  margin: 30px 0;
  box-shadow: var(--shadow-4);
  border-radius: 4px;
}

[data-beyond-mode=dark] .block__note {
  background: var(--secondary-dark);
  box-shadow: -5px -5px 30px 5px var(--secondary-darker), 5px 5px 30px 5px var(--secondary-darker);
  color: var(--text-color) !important;
  border: 1px solid var(--secondary-light);
  border-left-width: 8px;
}

.page__main-container {
  display: grid;
  gap: 15px;
  grid-template-columns: 1fr;
}
.page__main-container aside {
  display: none;
}
.page__main-container .page__main-content {
  max-width: 100%;
  overflow: hidden;
}
@media (min-width: 1025px) {
  .page__main-container {
    grid-template-columns: 1fr 250px;
  }
  .page__main-container aside {
    display: grid;
  }
}
.page__main-container .beyond-element-image {
  padding: 0;
  margin: 0;
}
.page__main-container .beyond-element-image img {
  width: 100%;
}
.svg_tbd_st0 {
  fill: #B6BDC7;
}

.svg_tbd_st1 {
  opacity: 0.3;
  fill: #DB733A;
}

.svg_tbd_st2 {
  fill: #C86042;
}

.svg_tbd_st3 {
  fill: #5D5A60;
}

.svg_tbd_st4 {
  fill: #D96849;
}

.svg_404_st1 {
  fill: none;
}

/*light clouds*/
.svg_404_st2 {
  fill: #9A979C;
}

.svg_404_st3 {
  fill: #5C595F;
}

/*dark clouds*/
.svg_404_st4 {
  fill: #5C595F;
}

.svg_404_st0 {
  fill: none;
  stroke: #5D5A60;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}

.svg_404_st5 {
  fill: #B6BDC7;
}

.svg_404_st6 {
  fill: #D96849;
}

#right-boxes {
  transform: translate(-150px, -140px);
}

[data-beyond-mode=dark] {
  /*dark clouds*/
  /*light clouds*/
}
[data-beyond-mode=dark] .svg_404_st0 {
  fill: none;
  stroke: #FFFFFF;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 10;
}
[data-beyond-mode=dark] .svg_404_st3 {
  fill: #FFFFFF;
}
[data-beyond-mode=dark] .svg_404_st4 {
  fill: #757575;
}
[data-beyond-mode=dark] .svg_404_st2 {
  fill: #b6bdc7;
}

.content.svg--content {
  padding: 4rem;
  display: flex;
  align-content: center;
  justify-content: center;
}

