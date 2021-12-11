import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:mobile/views/home/components/portrait_post_card.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/routes/app_routes.dart';
import 'package:mobile/views/home/components/landscape_post_card.dart';
import 'package:mobile/views/post/components/post_screen_recommeded_post_card.dart';
import 'package:mobile/views/post/post_screen.dart';
import 'package:sizer/sizer.dart';

enum PostCardStyle { portrait, landscape1, landscape2 }

class PostCard extends StatelessWidget {
  final PostCardStyle style;
  final Post post;
  const PostCard({Key? key, required this.style, required this.post})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    Offset _tapPosition = const Offset(0, 0);
    return GestureDetector(
      onTap: () => Get.toNamed(
        AppRoutes.POST,
        preventDuplicates: false,
        arguments: post,
      ),
      onLongPress: () => _showPopUpMenuOnLongPress(context, _tapPosition),
      onTapDown: (detail) {
        _tapPosition = detail.globalPosition;
      },
      child: style == PostCardStyle.landscape1
          ? LandscapePostCard(post: post)
          : style == PostCardStyle.landscape2
              ? PostScreenRecommededPostCard(post: post)
              : PortraitPostCard(post: post),
    );
  }

  Future<dynamic> _showPopUpMenuOnLongPress(
    BuildContext context,
    Offset _tapPosition,
  ) =>
      showMenu(
        context: context,
        position: RelativeRect.fromLTRB(
          _tapPosition.dx,
          _tapPosition.dy,
          double.infinity,
          double.infinity,
        ),
        items: [
          PopupMenuItem(
            child: Text(
              "Follow this publication",
              style: TextStyle(
                fontSize: 12.sp,
                fontFamily: 'Roboto',
                color: myTextColor,
              ),
            ),
          ),
          PopupMenuItem(
            child: Text(
              "Mute this publication",
              style: TextStyle(
                fontSize: 12.sp,
                fontFamily: 'Roboto',
                color: myTextColor,
              ),
            ),
          ),
          PopupMenuItem(
            child: Text(
              "Save to reading list",
              style: TextStyle(
                fontSize: 12.sp,
                fontFamily: 'Roboto',
                color: myTextColor,
              ),
            ),
          ),
        ],
      );
}
