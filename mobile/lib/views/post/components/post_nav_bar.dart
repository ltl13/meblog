import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostNavBar extends StatelessWidget {
  const PostNavBar({
    Key? key,
    required ValueNotifier<bool> isNavBarVisibleProvider,
  })  : _isNavBarVisibleProvider = isNavBarVisibleProvider,
        super(key: key);

  final ValueNotifier<bool> _isNavBarVisibleProvider;

  @override
  Widget build(BuildContext context) {
    return AnimatedPositioned(
        duration: const Duration(milliseconds: 500),
        bottom: _isNavBarVisibleProvider.value ? 0 : -40.sp,
        left: 0,
        right: 0,
        child: Container(
          color: myMainColor,
          height: 40.sp,
          width: 100.w,
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              ChangeNotifierProvider<ValueNotifier<bool>>(
                create: (context) => ValueNotifier<bool>(false),
                builder: (context, child) {
                  final _isLikeProvider =
                      Provider.of<ValueNotifier<bool>>(context);
                  return TextButton.icon(
                    onPressed: () =>
                        _isLikeProvider.value = !_isLikeProvider.value,
                    icon: Icon(
                      _isLikeProvider.value
                          ? Icons.thumb_up
                          : Icons.thumb_up_outlined,
                      size: 16.sp,
                      color: myButtonColor,
                    ),
                    label: Text(
                      "13.2k",
                      style: TextStyle(
                        color: myButtonColor,
                        fontSize: 12.sp,
                        fontFamily: 'Roboto',
                      ),
                    ),
                  );
                },
              ),
              TextButton.icon(
                onPressed: () => Get.toNamed(AppRoutes.COMMENT),
                icon: Icon(
                  Icons.comment_outlined,
                  size: 16.sp,
                  color: myButtonColor,
                ),
                label: Text(
                  "21.2k",
                  style: TextStyle(
                    color: myButtonColor,
                    fontSize: 12.sp,
                    fontFamily: 'Roboto',
                  ),
                ),
              ),
              IconButton(
                onPressed: null,
                icon: Icon(Icons.share, size: 16.sp, color: myButtonColor),
              ),
              ChangeNotifierProvider<ValueNotifier<bool>>(
                  create: (context) => ValueNotifier<bool>(false),
                  builder: (context, child) {
                    final _isFavoriteProvider =
                        Provider.of<ValueNotifier<bool>>(context);
                    return IconButton(
                      onPressed: () => _isFavoriteProvider.value =
                          !_isFavoriteProvider.value,
                      icon: Icon(
                        _isFavoriteProvider.value
                            ? Icons.bookmark_added
                            : Icons.bookmark_add_outlined,
                        size: 16.sp,
                        color: myButtonColor,
                      ),
                    );
                  }),
              PopupMenuButton(
                itemBuilder: (context) => [],
                icon: Icon(
                  Icons.more_vert,
                  size: 16.sp,
                  color: myButtonColor,
                ),
              ),
            ],
          ),
        ));
  }
}
