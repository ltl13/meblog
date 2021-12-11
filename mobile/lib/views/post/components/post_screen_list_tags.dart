import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:sizer/sizer.dart';

class PostScreenListTags extends StatelessWidget {
  const PostScreenListTags({
    Key? key,
    required this.post,
  }) : super(key: key);

  final Post post;

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 100.w,
      alignment: Alignment.centerLeft,
      padding: const EdgeInsets.all(myPadding),
      child: Wrap(
        alignment: WrapAlignment.start,
        crossAxisAlignment: WrapCrossAlignment.start,
        children:
            post.tags.map((e) => Tag(tag: e, size: TagSize.medium)).toList(),
      ),
    );
  }
}
