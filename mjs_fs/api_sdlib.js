let SD = {
    open: ffi(
        'void *mgos_sd_open(bool, char *, bool)'
    ),

    get: ffi(
        'void *mgos_sd_get_global()'
    ),

    info: ffi(
        'void mgos_sd_print_info(void *)'
    ),

    list: ffi(
        'bool mgos_sd_list(char *, void *)'
    ),

    size: ffi(
        'int mgos_sd_get_fs_size(int)'
    ),

    du: ffi(
        'int mgos_sd_get_fs_used(int)'
    ),

    df: ffi(
        'int mgos_sd_get_fs_free(int)'
    ),

    close: ffi(
        'void mgos_sd_close()'
    )
};