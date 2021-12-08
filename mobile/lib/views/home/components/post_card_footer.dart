import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:provider/provider.dart';
import 'package:sizer/sizer.dart';

class PostCardFooter extends StatelessWidget {
  const PostCardFooter({
    Key? key,
    required this.post,
    required ValueNotifier<bool> isFavoriteProvider,
  })  : _isFavoriteProvider = isFavoriteProvider,
        super(key: key);

  final Post post;
  final ValueNotifier<bool> _isFavoriteProvider;

  @override
  Widget build(BuildContext context) {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Row(
          children:
              post.tags.map((e) => Tag(tag: e, size: TagSize.small)).toList(),
        ),
        Row(
          children: [
            IconButton(
              onPressed: () {
                _isFavoriteProvider.value = !_isFavoriteProvider.value;
              },
              icon: Consumer<ValueNotifier<bool>>(
                builder: (context, isAdded, widget) => Icon(
                  isAdded.value ? Icons.bookmark_added : Icons.bookmark_add,
                  color: isAdded.value ? mySecondaryColor : myTertiaryColor,
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
                      color: myParagraphColor,
                    ),
                  ),
                ),
                PopupMenuItem(
                  child: Text(
                    "Mute this publication",
                    style: TextStyle(
                      fontSize: 12.sp,
                      fontFamily: 'Roboto',
                      color: myParagraphColor,
                    ),
                  ),
                ),
                PopupMenuItem(
                  child: Text(
                    "Save to reading list",
                    style: TextStyle(
                      fontSize: 12.sp,
                      fontFamily: 'Roboto',
                      color: myParagraphColor,
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
