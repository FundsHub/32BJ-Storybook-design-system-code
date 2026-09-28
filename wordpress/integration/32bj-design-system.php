<?php
/**
 * Plugin Name: 32BJ Design System
 * Description: Framework-free 32BJ design-system styles, assets, and interactions.
 * Version: 1.0.0
 */

if (!defined('ABSPATH')) {
    exit;
}

function bj32_design_system_asset_url($filename = '') {
    return plugin_dir_url(__FILE__) . 'assets/' . ltrim($filename, '/');
}

function bj32_design_system_asset_version($filename) {
    $path = plugin_dir_path(__FILE__) . 'assets/' . $filename;
    return is_file($path) ? substr(hash_file('sha256', $path), 0, 12) : '1.0.0';
}

function bj32_design_system_enqueue_assets() {
    wp_enqueue_style(
        '32bj-design-system',
        bj32_design_system_asset_url('32bj-design-system.css'),
        array(),
        bj32_design_system_asset_version('32bj-design-system.css')
    );

    wp_enqueue_script(
        '32bj-design-system',
        bj32_design_system_asset_url('32bj-design-system.js'),
        array(),
        bj32_design_system_asset_version('32bj-design-system.js'),
        true
    );

    $settings = array(
        'assetBase' => bj32_design_system_asset_url(),
    );

    wp_add_inline_script(
        '32bj-design-system',
        'window.BJ32DesignSystem = ' . wp_json_encode($settings) . ';',
        'before'
    );
}

add_action('wp_enqueue_scripts', 'bj32_design_system_enqueue_assets');
