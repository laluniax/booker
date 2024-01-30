import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getPostsHandler, getProductListHandler } from '../../api/supabase.api';
import { Bestseller, BooksInfoTypes, PostsTypes, ProductsTypes } from '../../types/types';
import { formatCreatedAt } from '../../utils/date';

import Loading from '../common/loading/Loading';
import * as St from './SearchField.styled';

const SearchField = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('search');
  const navigate = useNavigate();

  const [bookertalkList, setBookertalkList] = useState<PostsTypes[]>([]);
  const [marketList, setMarketList] = useState<ProductsTypes[]>([]);
  const [bestSellerList, setBestSellerList] = useState<Bestseller[]>([]);
  const [newBook, setNewBook] = useState<BooksInfoTypes[]>([]);
  const [bookSpecial, setBookSpecial] = useState<BooksInfoTypes[]>([]);
  const [bookerPick, setBookerPick] = useState<BooksInfoTypes[]>([]);
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);

  const getPost = async () => {
    try {
      const posts = await getPostsHandler();
      const filteredPosts = posts.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword?.toLowerCase()) ||
          (item.tags && item.tags.some((item: string) => item.toLowerCase().includes(`#${keyword}`?.toLowerCase())))
        );
      });
      setBookertalkList(filteredPosts.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };

  const getBook = async () => {
    try {
      setLoading1(true);
      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/bestseller`);
      const filteredBestSellers = response.data.item.filter((item: Bestseller) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.description.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBestSellerList(filteredBestSellers);
      setLoading1(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading2(true);

      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/BlogBest`);
      const filteredBookerPick = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBookerPick(filteredBookerPick);
      setLoading2(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading3(true);

      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/special`);
      const filteredBookSpecial = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setBookSpecial(filteredBookSpecial);
      setLoading3(false);
    } catch (error) {
      console.log(error);
    }
    try {
      setLoading4(true);

      const response = await axios.get(`https://port-0-booker-3wh3o2blr53yzc2.sel5.cloudtype.app/newbooks`);
      const filteredNewBooks = response.data.item.filter((item: BooksInfoTypes) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.author.toLowerCase().includes(keyword?.toLowerCase() as string) ||
          item.publisher.toLowerCase().includes(keyword?.toLowerCase() as string)
        );
      });
      setNewBook(filteredNewBooks);
      setLoading4(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getProduct = async () => {
    try {
      const products = await getProductListHandler();
      const filteredProducts = products.filter((item) => {
        return (
          item.title.toLowerCase().includes(keyword?.toLowerCase()) ||
          item.content.toLowerCase().includes(keyword?.toLowerCase())
        );
      });
      setMarketList(filteredProducts.sort((a, b) => b.id - a.id));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (keyword !== '') {
      getPost();
      getBook();
      getProduct();
    } else return;
  }, [keyword]);
  return (
    <St.Container>
      <St.SearchWrapper height={20}>
        <St.SearchTitle>북커톡</St.SearchTitle>
        {bookertalkList.length > 0 ? (
          <>
            {bookertalkList.map((item, i) => {
              return (
                <St.PostList key={i} onClick={() => navigate(`/detail/${item.id}`)}>
                  <St.Post width={13}>{item.title}</St.Post>
                  <St.Post width={50}>{item.content}</St.Post>
                  <St.Post width={15}>
                    {item.users.nickname} | {formatCreatedAt(item.created_at)}
                  </St.Post>
                </St.PostList>
              );
            })}
          </>
        ) : (
          <>검색 결과가 없습니다.</>
        )}
      </St.SearchWrapper>
      <St.SearchBookWrapper>
        <St.SearchTitle>도서 소개</St.SearchTitle>

        {bestSellerList.length > 0 ? (
          <>
            <St.BookListCategory>베스트 셀러</St.BookListCategory>
            {loading1 ? <Loading /> : null}
            <St.BookList>
              {bestSellerList.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
        {newBook.length > 0 ? (
          <>
            <St.BookListCategory>신간도서</St.BookListCategory>
            {loading2 ? <Loading /> : null}
            <St.BookList>
              {newBook.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
        {bookSpecial.length > 0 ? (
          <>
            <St.BookListCategory>스페셜</St.BookListCategory>
            {loading3 ? <Loading /> : null}
            <St.BookList>
              {bookSpecial.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
        {bookerPick.length > 0 ? (
          <>
            <St.BookListCategory>북커픽</St.BookListCategory>
            {loading4 ? <Loading /> : null}
            <St.BookList>
              {bookerPick.map((item, i) => {
                return (
                  <St.Book
                    key={i}
                    onClick={() => {
                      navigate(`/aboutBook/${item.isbn13}`);
                    }}>
                    <St.BookImg>
                      <img src={item.cover} />
                    </St.BookImg>
                    <St.BookAuthor>{item.author}</St.BookAuthor>
                    <St.BookAuthor>{item.publisher}</St.BookAuthor>
                  </St.Book>
                );
              })}
            </St.BookList>
          </>
        ) : (
          <></>
        )}
      </St.SearchBookWrapper>
      <St.SearchWrapper height={30}>
        <St.SearchTitle>중고거래</St.SearchTitle>
        {marketList.length > 0 ? (
          <St.ProductList>
            {marketList.map((item, i) => {
              return (
                <St.Product key={i} onClick={() => navigate(`/product/${item.id}`)}>
                  {item.product_img && item.product_img.length === 0 ? (
                    <St.LogoImg />
                  ) : (
                    <St.ProductImg>
                      <img src={(item.product_img && item.product_img[0]) ?? undefined} alt="검색결과상품이미지" />
                    </St.ProductImg>
                  )}
                  <div>{item.title}</div>
                  <div>{item.price} 원</div>
                </St.Product>
              );
            })}
          </St.ProductList>
        ) : (
          <>검색 결과가 없습니다.</>
        )}
      </St.SearchWrapper>
    </St.Container>
  );
};

export default SearchField;
