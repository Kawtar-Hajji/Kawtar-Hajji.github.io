$(function() {
    // Wire up change vent for each tab.
    $('#example-tabs').on('change.zf.tabs', function() {
        // The debugger statement is used to establish
        // a JavaScript breakpoint in browser dev tools.
        debugger;
        if ($('#panel1:visible').length) {
            console.log('Tab 1 panel shown.');
        }
        if ($('#panel2:visible').length) {
            console.log('Tab 2 panel shown.');
        }
    });

    // Initialize the Foundation framework.
    $(document).foundation();
    // Ensure change event fires for default active tab.
    // If you comment this line out, the change event
    // isn't called for the initally displayed tab.
    $('#example-tabs').foundation('selectTab', 'panel1');
});