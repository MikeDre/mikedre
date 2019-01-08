<? include ( './partials/header.php' ) ?>

    <? include ( './partials/hero--page-design.php' ) ?>

    <section class="uk-container margin-t-150 margin-b-100">
        <div hidden>
            <ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-slide-right-medium, uk-animation-slide-left-medium">
                <li><a href="#">Logos Design</a></li>
                <li class="uk-disabled"><a href="#">UI/UX Design <small class="coming-soon">Coming soon</small></a></li>
                <li class="uk-disabled"><a href="#">Illustration & Iconography <small class="coming-soon">Coming soon</small></a></li>
            </ul>
            <ul class="uk-switcher uk-margin">
                <li><? include ( './partials/logos.php' ) ?></li>
                <li><? include ( './partials/ui-ux-design.php' ) ?></li>
                <li><? include ( './partials/illustration-icons.php' ) ?></li>
            </ul>
        </div>
        <? include ( './partials/logos.php' ) ?>
    </section>

<? include ( './partials/footer.php' ) ?>
