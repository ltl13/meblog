import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/comments.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:sizer/sizer.dart';

class SingleCommentHeader extends StatelessWidget {
  const SingleCommentHeader({
    Key? key,
    required this.comment,
  }) : super(key: key);

  final Comment comment;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        AuthorWithImage(
          author: comment.author,
          size: AuthorWithImageSize.medium,
        ),
        Text(
          "  •  " + comment.time,
          style: TextStyle(
            color: mySubHeadlineColor.withOpacity(.7),
            fontSize: 12.sp,
            fontFamily: 'Roboto',
          ),
        ),
        const Expanded(child: SizedBox()),
        PopupMenuButton(
          padding: const EdgeInsets.all(0),
          iconSize: 16.sp,
          icon: const Icon(Icons.more_horiz),
          itemBuilder: (context) => [],
        ),
      ],
    );
  }
}
