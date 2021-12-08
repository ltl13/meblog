import 'package:flutter/material.dart';
import 'package:mobile/constants.dart';
import 'package:mobile/models/post.dart';
import 'package:mobile/views/home/components/author_with_image.dart';
import 'package:mobile/views/search/components/list_recommended_authors.dart';
import 'package:mobile/views/search/components/search_app_bar.dart';
import 'package:mobile/views/search/components/search_box_and_tags.dart';
import 'package:mobile/views/search/components/search_recommend_list.dart';
import 'package:sizer/sizer.dart';

class SearchScreen extends StatelessWidget {
  const SearchScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return CustomScrollView(
      slivers: [
        const SearchAppBar(),
        const SearchBoxAndTags(),
        const SearchRecommendList(),
        const ListRecommendedAuthors(),
        SliverList(
          delegate: SliverChildListDelegate([
            Container(
              color: myParagraphColor,
              padding: const EdgeInsets.symmetric(vertical: myPadding),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: myPadding),
                    child: Text(
                      "What are people reading now?",
                      style: TextStyle(
                        color: myBackgroundColor,
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w900,
                        fontSize: 24.sp,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      horizontal: myPadding,
                      vertical: myPadding,
                    ),
                    child: Text(
                      "Explore the top trending.",
                      style: TextStyle(
                        color: myMainColor.withOpacity(.7),
                        fontFamily: 'Roboto',
                        fontWeight: FontWeight.w500,
                        fontSize: 16.sp,
                      ),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(
                      vertical: myPadding / 2,
                    ),
                    child: SingleChildScrollView(
                      scrollDirection: Axis.horizontal,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.start,
                        children: [
                          ...posts
                              .map((e) => Container(
                                    width: 240.sp,
                                    height: 240.sp,
                                    padding: const EdgeInsets.only(
                                      left: myPadding,
                                      right: myPadding / 2,
                                    ),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      mainAxisAlignment:
                                          MainAxisAlignment.spaceBetween,
                                      children: [
                                        SizedBox(
                                          height: 120.sp,
                                          width: 240.sp,
                                          child: Image.asset(
                                            e.image,
                                            fit: BoxFit.fill,
                                          ),
                                        ),
                                        AuthorWithImage(
                                          post: e,
                                          mode: AuthorWithImageMode.dark,
                                          size: AuthorWithImageSize.medium,
                                        ),
                                        RichText(
                                          textAlign: TextAlign.left,
                                          overflow: TextOverflow.ellipsis,
                                          maxLines: 3,
                                          text: TextSpan(
                                            text: e.title,
                                            style: TextStyle(
                                              color: myBackgroundColor,
                                              fontFamily: 'Roboto',
                                              fontWeight: FontWeight.bold,
                                              fontSize: 16.sp,
                                            ),
                                          ),
                                        ),
                                        Text(
                                          e.datePost +
                                              "  •  " +
                                              e.timeReading.toString() +
                                              " min read",
                                          style: TextStyle(
                                            color: myMainColor.withOpacity(.7),
                                            fontFamily: 'Roboto',
                                            fontSize: 14.sp,
                                            fontWeight: FontWeight.normal,
                                          ),
                                        ),
                                      ],
                                    ),
                                  ))
                              .toList(),
                          const SizedBox(width: myPadding),
                        ],
                      ),
                    ),
                  )
                ],
              ),
            )
          ]),
        ),
      ],
    );
  }
}
