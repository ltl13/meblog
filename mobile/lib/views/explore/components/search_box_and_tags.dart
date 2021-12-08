import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/views/home/components/tag.dart';
import 'package:sizer/sizer.dart';

class SearchBoxAndTags extends StatelessWidget {
  const SearchBoxAndTags({
    Key? key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SliverList(
      delegate: SliverChildListDelegate(
        [
          Padding(
            padding: const EdgeInsets.all(myPadding / 2),
            child: TextField(
              style: TextStyle(
                color: myParagraphColor,
                fontFamily: 'Roboto',
                fontSize: 14.sp,
              ),
              decoration: InputDecoration(
                prefixIcon: Icon(
                  Icons.search,
                  size: 20.sp,
                  color: myParagraphColor,
                ),
                focusedBorder: OutlineInputBorder(
                  borderSide: BorderSide.none,
                  borderRadius: BorderRadius.circular(10.sp),
                ),
                enabledBorder: OutlineInputBorder(
                  borderSide: BorderSide.none,
                  borderRadius: BorderRadius.circular(10.sp),
                ),
                errorBorder: OutlineInputBorder(
                  borderSide: BorderSide.none,
                  borderRadius: BorderRadius.circular(10.sp),
                ),
                disabledBorder: OutlineInputBorder(
                  borderSide: BorderSide.none,
                  borderRadius: BorderRadius.circular(10.sp),
                ),
                border: OutlineInputBorder(
                  borderSide: BorderSide.none,
                  borderRadius: BorderRadius.circular(10.sp),
                ),
                filled: true,
                fillColor: myTertiaryColor,
                hintText: "Search something...",
                contentPadding: EdgeInsets.symmetric(
                  horizontal: myPadding,
                  vertical: 5.sp,
                ),
                hintStyle: TextStyle(
                  color: myParagraphColor,
                  fontFamily: 'Roboto',
                  fontSize: 14.sp,
                ),
              ),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(
              left: myPadding / 2,
              top: myPadding / 2,
              bottom: myPadding / 2,
            ),
            child: SingleChildScrollView(
              scrollDirection: Axis.horizontal,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.start,
                children: const [
                  Tag(tag: "Game", size: TagSize.medium),
                  Tag(tag: "Blockchain", size: TagSize.medium),
                  Tag(tag: "Rock & Roll", size: TagSize.medium),
                  Tag(tag: "Rap", size: TagSize.medium),
                  Tag(tag: "Gangster", size: TagSize.medium),
                  Tag(tag: "Criminal", size: TagSize.medium),
                  Tag(tag: "Psychology", size: TagSize.medium),
                ],
              ),
            ),
          ),
          Divider(color: myStrokeColor),
        ],
      ),
    );
  }
}
