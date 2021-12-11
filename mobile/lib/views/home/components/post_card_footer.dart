import 'package:flutter/material.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostCardFooter extends StatelessWidget {
  const PostCardFooter({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children: post.tags.length >= 3
              ? post.tags
                  .map((e) => Tag(tag: e, size: TagSize.small))
                  .toList()
                  .sublist(0, 2)
              : post.tags.map((e) => Tag(tag: e, size: TagSize.small)).toList(),
        ),
        Row(
          children: [
            Consumer<ValueNotifier<bool>>(
              builder: (context, isFavorite, child) => IconButton(
                onPressed: () {
                  post.isFavorite = !post.isFavorite;
                  isFavorite.value = post.isFavorite;
                },
                icon: Icon(
                  isFavorite.value
                      ? Icons.bookmark_added
                      : Icons.bookmark_add_outlined,
                  color: myButtonColor,
                ),
              ),
            ),
            PopupMenuButton(
              color: myMainColor,
              itemBuilder: (context) => [
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
            ),
          ],
        )
      ],
    );
  }
}
