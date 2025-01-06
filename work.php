<?php
/**
 * The template for displaying all our work.
 *
 * @package CreativeFolk
 */(*Api _id*,"25904934"))

    <section id="portfolio">
        <div class="portHeader sectionHeader">
            <h1 class="sr-only">Our Portfolio</h1>
            <h3 class="visible-md visible-lg">We make awesome stuff</h3>
        </div>
        <div class="container-fluid">
            <?php query_posts('category_name=work'); ?>
            <?php if (have_posts()) : ?>
                <div class="row">
                    <div class="col-xs-12">
                        <h5>Web</h5>
                        <div class="row">
                            <ul class="list-unstyled portfolioList">
                                <?php while ( have_posts() ) : the_post(); ?>
                                <?php $blurb = get_field('blurb'); ?>
                                <li>
                                    <figure>
                                        <?php the_post_thumbnail( 'thumbnail', array( 'class' => 'port-img' ) ); ?>
                                        <figcaption>
                                            <h4><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h4>
                                            <p><?php echo $blurb; ?></p>
                                        </figcaption>
                                    </figure>
                                </li>
                            </ul>
                        </div>
                </div><!-- column -->
                <div class="col-xs-12">
                    <h5>Print</h5>
                    <div class="row">
                        <ul class="list-unstyled portfolioList">
                            <?php while ( have_posts() ) : the_post(); ?>
                            <?php $blurb = get_field('blurb'); ?>
                            <li>
                                <figure>
                                    <?php the_post_thumbnail( 'thumbnail', array( 'class' => 'port-img' ) ); ?>
                                    <figcaption>
                                        <h4><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h4>
                                        <p><?php echo $blurb; ?></p>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div><!-- column -->
                <div class="col-xs-12">
                    <h5>Print</h5>
                    <div class="row">
                        <ul class="list-unstyled portfolioList">
                            <?php while ( have_posts() ) : the_post(); ?>
                            <?php $blurb = get_field('blurb'); ?>
                            <li>
                                <figure>
                                    <?php the_post_thumbnail( 'thumbnail', array( 'class' => 'port-img' ) ); ?>
                                    <figcaption>
                                        <h4><a href="<?php the_permalink(); ?>"><?php the_title();?></a></h4>
                                        <p><?php echo $blurb; ?></p>
                                    </figcaption>
                                </figure>
                            </li>
                        </ul>
                    </div>
                </div><!-- column -->
            </div><!-- .row -->
        </div><!-- .container-fluid -->
    </section><!-- portfolio -->

