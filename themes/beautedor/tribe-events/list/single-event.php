<?php
/**
 * List View Single Event
 * This file contains one event in the list view
 *
 * Override this template in your own theme by creating a file at [your-theme]/tribe-events/list/single-event.php
 *
 * @version 4.6.19
 *
 */
if ( ! defined( 'ABSPATH' ) ) {
	die( '-1' );
}

// Setup an array of venue details for use later in the template
$venue_details = tribe_get_venue_details();

// The address string via tribe_get_venue_details will often be populated even when there's
// no address, so let's get the address string on its own for a couple of checks below.
$venue_address = tribe_get_address();

// Venue
$has_venue_address = ( ! empty( $venue_details['address'] ) ) ? ' location' : '';

// Organizer
$organizer = tribe_get_organizer();

?>
<div class="flex flex-row">
<!-- Event Title -->
<?php do_action( 'tribe_events_before_the_event_title' ) ?>
<h3 class="event__title">
	<?php the_title() ?>
</h3>
<?php do_action( 'tribe_events_after_the_event_title' ) ?>

<!-- Event Meta -->
<?php do_action( 'tribe_events_before_the_meta' ) ?>
<div class="event__info">
	<?php echo tribe_events_event_info() ?>	
</div><!-- .tribe-events-event-meta -->

<?php do_action( 'tribe_events_after_the_meta' ) ?>
</div>
<div class="flex flex-row">
<!-- Event Content -->
<?php do_action( 'tribe_events_before_the_content' ); ?>
<div class="event__description flex-grow">
	<?php echo tribe_events_get_the_excerpt( null, wp_kses_allowed_html( 'post' ) ) ?>
</div><!-- .tribe-events-list-event-description -->

<!-- Event Image -->
<?php echo tribe_event_featured_image( null, 'medium' ); ?>
</div>
<?php
do_action( 'tribe_events_after_the_content' );