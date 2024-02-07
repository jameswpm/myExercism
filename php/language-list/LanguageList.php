<?php

function language_list(...$langs)
{
    return $langs;
}

function add_to_language_list($language_list, $new_lang) {
    $language_list[] = $new_lang;
    return $language_list;
}

function prune_language_list($language_list){
    return array_slice($language_list, 1);
}

function current_language($language_list){
    return $language_list[0];
}

function language_list_length($language_list){
    count($language_list);
}